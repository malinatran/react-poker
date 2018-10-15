import React from 'react'
import '../App.css'

export const Scoreboard = ({ score }) => (
  <div className="col-sm-12">
    <h3 className="score-text">Score: {score}</h3>
  </div>
)
