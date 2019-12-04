import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {
      title: 'Venom[eminem]',
      duration: '4:05',
    },
    {
      title: 'Makarena',
      duration: '2:15',
    },
    {
      title: 'Row your boat',
      duration: '5:35',
    },
    {
      title: 'Pop The Trunk',
      duration: '2:00',
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') return action.payload;

  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
})