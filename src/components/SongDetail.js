import React from 'react'
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  console.log(song)
  if (!song) return null
  return (
    <div>
      {song.title}
      {song.duration}
    </div>
  )
}

const mapStateToProps = ({ selectedSong })=> {
  return { song: selectedSong }
}

export default connect(mapStateToProps)(SongDetail);