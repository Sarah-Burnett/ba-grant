import React from 'react';
import PsychophysP1 from './PsychophysP1';

const PsychophysP = () => {
    return (
        <div>
            <h1>Psychophys Preprocessing</h1>
            <ul>
                <li><a href="#part1">Part 1</a></li>
                <li><a href="#part2">Part 2</a></li>
                <li><a href="#part3">Part 3</a></li>
            </ul>
            <section id="part1">
                <h2>Part 1 - filtering HRV and calculating BPM</h2>
                <PsychophysP1/>
            </section>
            <section id="part2">
                <h2>Part 2- export means and HRV for each task</h2>
            </section>
            <section id="part3">
                <h2>Part 3 - data analysis</h2>
            </section>
        </div>
    )
};

export default PsychophysP;
