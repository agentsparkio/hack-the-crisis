import React from 'react';
import { Radio, RadioGroup, ProgressBar, FormGroup, Slider } from "@blueprintjs/core";
import { Button } from "@blueprintjs/core";
import Complete from '../complete/complete';
import "./quiz.css";
// import DATA from "./data/quiz_WM.json";

function WMQuiz({ type, points, setNotifyText, setNotifyTextHeader }) {
    const [value, handleChange] = React.useState("");
    const [foodScraps, setFoodScraps] = React.useState(0);
    const [threeRs, setThreeRs] = React.useState("");
    const [isComplete, setComplete] = React.useState(false);
    const [progress, setProgress] = React.useState(false);
    // const [answers, updateAnswers] = React.useState(DATA.answers);
    // const [questions, setQuestion] = React.useState(DATA.questions);
    React.useEffect(() => {
        let result = 0;
        if(value!== "") result++;
        if(foodScraps!== 0) result++;
        if(threeRs!== "") result++;
        setProgress(parseFloat(result/3));
    }, [value, foodScraps, threeRs]);
    React.useEffect(() => {
        if(isComplete === true) {
            setNotifyText("<p>Thanks for completing the <strong>Managing Waste Quiz!</strong>. </p><p>Go to the rewards page to redeem your points. </p>")
            setNotifyTextHeader("You've just won 200 points! CONGRATULATIONS :)")

        }
    }, [isComplete]);

    return (
        <div className="Quiz">
            <ProgressBar stripes={false} value={progress} />
            {isComplete && <Complete points={points} isHidden={!isComplete} />}
            <h1>{type} Quiz</h1>
            <p>Complete quiz for {points} points. Begin...</p>
            <div className="bottomSpace" />
            {/* {questions.map((question, idx) => {
                if (question.type === "radio") {
                    const options = question.answers.map(answer => <Radio label={answer.label} value={answer.label} />)

                    return (
                        <>
                            <RadioGroup
                                inline="inline"
                                label={`${idx + 1}. ${question.label}`}
                                name="group"
                                onChange={(value) => {
                                    const newAnswers = [
                                        ...answers,
                                        {
                                            [idx]: {
                                                value
                                            }
                                        }
                                    ];
                                    
                                    updateAnswers(newAnswers);
                            }}
                            selectedValue={answers[idx].value}
                        >
                            {options}
                        </RadioGroup>
                        <div className="bottomSpace" />
                        </>
    )
}
            })} */}
             <RadioGroup
                label="What do the 3 R's in waste disposal stand for?"
                name="group"
                onChange={(event) => {
                    setThreeRs(event.currentTarget.value)
                }}
                selectedValue={threeRs}
            >
                <Radio label="Reorganise, Reuse, Recycle" value="one" />
                <Radio label="Reduce, Reuse, Recycle" value="two" />
                <Radio label="Reduce, Remake, Recycle" value="three" />
            </RadioGroup>
            <FormGroup
                label="Food scraps in one week?"
                labelFor="text-input"
                labelInfo="(cups)"
            >
                <Slider
                    min={0}
                    max={20}
                    stepSize={1}
                    labelStepSize={5}
                    onChange={(event) => {
                        setFoodScraps(event)
                    }}
                    labelRenderer={(value) => value}
                    value={foodScraps}
                />
            </FormGroup>

            <RadioGroup
                label="Biggest proportion of food scraps?"
                name="group"
                onChange={(event) => {
                    handleChange(event.currentTarget.value)
                }}
                selectedValue={value}
            >
                <Radio label="Fruit and veggies" value="one" />
                <Radio label="Processed foods" value="two" />
                <Radio label="Other" value="three" />
            </RadioGroup>
            <div className="bottomSpace" />
            <Button disabled={progress !== 1} intent="success" onClick={() => setComplete(true)} type="submit" title="Submit">Submit for {points} Green Points!</Button>
        </div >
    );
}

export default WMQuiz;
