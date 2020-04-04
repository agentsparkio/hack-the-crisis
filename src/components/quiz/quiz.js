import React from 'react';
// import { Radio, RadioGroup } from "@blueprintjs/core";
import { FormGroup, Slider, Button } from "@blueprintjs/core";
import Complete from './../complete/complete';
import "./quiz.css";

function Quiz({ type, description, points }) {
    // const [value, handleChange] = React.useState("one");
    const [foodScraps, setFoodScraps] = React.useState(1);
    const [isComplete, setComplete] = React.useState(false);

    return (
        <div className="Quiz">
            {isComplete && <Complete points={points} isHidden={!isComplete}  />}
            <h1>{type} Assessment</h1>
            <p>Complete quiz for an extra {points} points</p>
            <FormGroup
                label="1. How well do you XYZ?"
                labelFor="text-input"
            >
                <Slider
                    min={0}
                    max={10}
                    stepSize={1}
                    labelStepSize={1}
                    onChange={(value) => setFoodScraps(value)}
                    labelRenderer={(value) => value}
                    value={foodScraps}
                />
            </FormGroup>
            {/* <FormGroup
    label="How well do you XYZ?"
    labelFor="text-input"
>
<Slider
                    min={0}
                    max={10}
                    stepSize={1}
                    labelStepSize={1}
                    onChange={(value) => setFoodScraps(value)}
                    labelRenderer={(value) => value}
                    value={foodScraps}
                />
</FormGroup> */}
            {/* <FormGroup
    helperText="It always helps to record these daily in the app. "
    label="Food scraps in one week?"
    labelFor="text-input"
    labelInfo="(cups)"
>
<Slider
                    min={0}
                    max={50}
                    stepSize={1}
                    labelStepSize={5}
                    onChange={(value) => setFoodScraps(value)}
                    labelRenderer={(value) => value}
                    value={foodScraps}
                />
</FormGroup> */}

            {/* <RadioGroup
                label="Biggest proportion of food scraps?"
                name="group"
                onChange={(value) => handleChange(value)}
                selectedValue={value}
            >
                <Radio label="Fruit and veggies" value="one" />
                <Radio label="Processed foods" value="two" />
                <Radio label="Other" value="three" />
            </RadioGroup> */}
            <Button onClick={() => setComplete(true)} type="submit" title="Submit assessment">Submit assessment</Button>
        </div>
    );
}

export default Quiz;
