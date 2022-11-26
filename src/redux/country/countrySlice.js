import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import getCtryloc from '../../api/getCtryloc';
import getCtrydata from '../../api/getCtrydata';

export const countriesInfo = createAsyncThunk(
  'country/getCtrydata', async (_, thunkAPI) => {
    const details = [];
    const { countries } = thunkAPI.getState();
    countries.forEach((ctry) => {
      details.push(getCtryloc(ctry).then(async (ctryinfo) => {
        const data = await getCtrydata(ctryinfo.lat, ctryinfo.lon);
        return { id: uuidv4(), ctryinfo, data: data.list[0] };
      }));
    });
    const countrydata = await Promise.all(details);
    return countrydata;
  },
);

const initialState = {
  countries: ['Benin', 'Burkina Faso', 'Cape Verde', 'Côte D\'Ivoire,', 'Gambia', 'Ghana', 'Guinea', 'Bissau', 'Liberia', 'Mali', 'Mauritania', 'Niger', 'Nigeria', 'Senegal', 'Sierra Leone', 'Togo'],
  countrydata: [],
  status: 'idle',
  error: null,
};

const countrySlice = createSlice({
  name: 'country',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(countriesInfo.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.status = 'succeeded';
      // eslint-disable-next-line no-param-reassign
      state.countrydata = action.payload;
    });
  },
});

export default countrySlice.reducer;
export const { getData } = countrySlice.actions;
