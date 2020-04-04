import React from 'react';
// import { Radio, RadioGroup } from "@blueprintjs/core";
import { FormGroup, Slider, Button } from "@blueprintjs/core";
import "./quiz.css";

function Quiz({ type, description }) {
    // const [value, handleChange] = React.useState("one");
    const [foodScraps, setFoodScraps] = React.useState(1);

    return (
        <div className="Quiz">
            <h1>{type} Assessment</h1>
            <p>{description}</p>
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
<FormGroup
    label="2. How well do you XYZ?"
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
<FormGroup
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
</FormGroup>
<FormGroup
    label="3. How well do you XYZ?"
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
<FormGroup
    label="4. How well do you XYZ?"
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
            <Button type="submit" title="Submit assessment">Submit assessment</Button>
        </div>
    );
}

export default Quiz;
