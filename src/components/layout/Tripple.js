import React from "react";

function Tripple(props) {

    let answer = props.number;

    if(props.multiply === true) {
        answer = props.number * 2;
    }

	return (
		<ul className="answer">
			{<li>lorem ipsum text</li>}
		</ul>
	);
}

export default Tripple;