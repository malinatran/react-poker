import React from 'react'
import '../App.css'

export const Scoreboard = ({ score }) => (
  <div className="col-sm-12">
    <h3 className="ScoreText">Score: {score}</h3>
  </div>
)
