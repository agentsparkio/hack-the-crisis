import React from 'react';
import { Radio, RadioGroup } from "@blueprintjs/core";
import { Button } from "@blueprintjs/core";
import Complete from '../complete/complete';
import "./quiz.css";
import DATA from "./data/quiz_WM.json";

function WMQuiz({ type, description, points }) {
    const [value, handleChange] = React.useState("one");
    const [isComplete, setComplete] = React.useState(false);
    const [questions, setQuestion] = React.useState(DATA.questions);
    return (
        <div className="Quiz">
            {isComplete && <Complete points={points} isHidden={!isComplete} />}
            <h1>{type} Quiz</h1>
            <p>Complete quiz for {points} points. Begin...</p>
            <div className="bottomSpace" />
            {questions.map((question, idx) => {
                if (question.type === "radio") {
                    const options = question.answers.map(answer => <Radio label={answer.label} value={answer.label} />)
                    
                    return (
                        <>
                        <RadioGroup
                            inline="inline"
                            label={`${idx+1}. ${question.label}`}
                            name="group"
                            onChange={(value) => {}}
                            selectedValue={value}
                        >
                            {options}
                        </RadioGroup>
                        <div className="bottomSpace" />
                        </>
                    )
                }
            })}
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
            <div className="bottomSpace" />
            <Button intent="success" onClick={() => setComplete(true)} type="submit" title="Submit">Submit for {points} Green Points!</Button>
        </div>
    );
}

export default WMQuiz;
