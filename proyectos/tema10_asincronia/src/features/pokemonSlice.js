import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchPokemon = createAsyncThunk(
    "pokemon/fetchPokemon",
    async (thunkAPI) => {
        const numeroAleatorio = Math.round(Math.random() * 799) + 1;
        try {
        const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${numeroAleatorio.toString()}`
        );
        return response.data;
        } catch (error) {
        return error.toString();
        }
    }
);

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: {
        pokemon: {},
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPokemon.pending, (state, action) => {
        state.status = "loading";
        });
        builder.addCase(fetchPokemon.fulfilled, (state, action) => {
        state.pokemon = action.payload;
        });
        builder.addCase(fetchPokemon.rejected, (state, action) => {
        state.error = action.payload;
        });
    },
});

export default pokemonSlice.reducer