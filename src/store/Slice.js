import { createSlice } from "@reduxjs/toolkit" ;

const initialState = {
  turn: true,
  winner: "",

  data: [
    {
      id: 1,
      token: "",
      chosen: false
    },

    {
      id: 2,
      token: "",
      chosen: false
    },

    {
      id: 3,
      token: "",
      chosen: false
    },

    {
      id: 4,
      token: "",
      chosen: false
    },

    {
      id: 5,
      token: "",
      chosen: false
    },

    {
      id: 6,
      token: "",
      chosen: false
    },

    {
      id: 7,
      token: "",
      chosen: false
    },

    {
      id: 8,
      token: "",
      chosen: false
    },

    {
      id: 9,
      token: "",
      chosen: false
    },
    
  ]
}

export const gameSlice = createSlice({
  
  name: "toggleToken",

  initialState,
  
  reducers: {

    togglePlayer: (state, action) => {

        {state.data.map((item) => {

          if(item.id === action.payload.id) {

              if(item.chosen) {
                alert("Already Chosen !! Please Choose another block")  
              }

              else if(!item.chosen && state.turn) {
                item.token = "X"
                state.turn = false
                item.chosen = true
              }

              else if(!item.chosen && !state.turn) {
                item.token = "O"
                state.turn = true
                item.chosen = true
              }
            }

        })}
    },

   declareWinner: (state) => {

      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      winningCombinations.forEach((combination) => {

        // Destucturing the array elements ...
        const [a, b, c] = combination;

        if (
          state.data[a].token &&
          state.data[a].token === state.data[b].token &&
          state.data[a].token === state.data[c].token
        ) {

          state.winner = state.data[a].token;
          alert(`💐💐 Player ${state.winner} wins! 💐💐`);

        }

    });

  }

  }
})

export const {togglePlayer, declareWinner} = gameSlice.actions
export default gameSlice.reducer

