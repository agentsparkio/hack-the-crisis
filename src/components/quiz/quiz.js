import React from 'react';
import { Radio, RadioGroup } from "@blueprintjs/core";
import { FormGroup, Slider } from "@blueprintjs/core";

function Quiz({ type, description }) {
    const [value, handleChange] = React.useState("one");
    const [foodScraps, setFoodScraps] = React.useState(1);

    return (
        <div className="Quiz">
            <h1>{type} Quiz</h1>
            <p>{description}</p>
           
            <FormGroup
    helperText="It always helps to record these daily in the app. "
    label="Food scraps in one week?"
    labelFor="text-input"
    labelInfo="(cups)"
>
<Slider
                    min={0}
                    max={50}
                    stepSize={5}
                    labelStepSize={5}
                    onChange={(value) => setFoodScraps(value)}
                    labelRenderer={(value) => value}
                    value={foodScraps}
                />
</FormGroup>

<RadioGroup
                label="Biggest proportion of food scraps?"
                name="group"
                onChange={(value) => handleChange(value)}
                selectedValue={value}
            >
                <Radio label="Fruit and veggies" value="one" />
                <Radio label="Processed foods" value="two" />
                <Radio label="Other" value="three" />
            </RadioGroup>
        </div>
    );
}

export default Quiz;
