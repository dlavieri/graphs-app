import React from 'react';
import './bargraph.css';

function BarGraph (props) {


        return (
            <div className="bargraph">
                <svg className="bargraph__chart" role="img" aria-labelledby="title">
                    <title>A Bar Graph in SVG</title>
                    {props.data.map((item, i) => {
                        let n = props.data.length;
                        let max = 21;
                        let h = (300/n) * 0.9;
                        let w = (item.amt/max) * 500;
                        let y = (300/n) * i;
                        console.log(y)
                        return (
                            <g className="bar">
                                <rect width={w} height={h} y={y}></rect>
                                <text x={w+5} y={y+(0.6*h)}>{item.amt}</text>
                            </g>
                        )
                    })}
                </svg>
            </div>
        )
}

export default BarGraph;

{/* <g className="bar">
    <rect width="40" height="19" y="0"></rect>
    <text x="45" y="13">4 units</text>
</g>
<g className="bar">
    <rect width="80" height="19" y="20"></rect>
    <text x="85" y="33">8 units</text>
</g>
<g className="bar">
    <rect width="150" height="19" y="40"></rect>
    <text x="155" y="53">15 units</text>
</g>
<g className="bar">
    <rect width="160" height="19" y="60"></rect>
    <text x="165" y="73">16 units</text>
</g> */}