import { createSlice } from '@reduxjs/toolkit';
const jpegs =[
 "https://images.unsplash.com/photo-1658233427329-9d72b824e144?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T3B0aW11cyUyMHByaW1lfGVufDB8fDB8fHww",
"https://images.unsplash.com/photo-1662897037721-a041bf3d22be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QnVtYmxlYmVlJTIwJTIwcm9ib3R8ZW58MHx8MHx8fDA%3D",
"https://images.unsplash.com/photo-1650244369738-974634c9fe3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SmF6eiUyMCUyMHRyYW5zZm9ybWVyc3xlbnwwfHwwfHx8MA%3D%3D",
"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR34XA1OzHuJvJD-6eT_Gt3ynH_y1kU3LA0bkdrx9U630Q7HQTzM4VW2WXonl9g00k45_v3VEpI0s1DpFHdzdxotMdbFzVJkfpYal7XR_c",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSta84RtFG9qOfYZd69wSn4v88BPMPGd_KKhw&s",


]
export const robotSlice = createSlice({
  name: 'robot',
  initialState: {
    name: "", 
    newAr: [] ,
    jpegs,
  warning:""

  },
  reducers: {
    rename: (state, action) => {
      state.name = action.payload;
    },
    submit: (state, action) => {
      const robotName=action.payload
      if (!robotName || state.newAr.find(robot => robot.name === robotName)) {
        state.warning = "AYNI İSİMLE BİRDEN FAZLA ROBOT OLAMAZ"
        return 
      }else{
        const randomImage = Math.floor(Math.random() * state.jpegs.length)
        const newRobotId = crypto.randomUUID()
        state.warning =""
        state.newAr.push({ name: action.payload, image: state.jpegs[randomImage],id: newRobotId });
      }
        
      
    },
    clear: (state, action) => {
      state.newAr = state.newAr.filter(robot => robot.id !== action.payload);
    },
  },
});
export const { rename, submit,clear } = robotSlice.actions;

export default robotSlice.reducer;
