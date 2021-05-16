import React from 'react';
import { appName } from '../constants';
import Banner from './_parts/banner/Banner';
import WorkStep from './_parts/work-step/WorkStep';
import {getServerHome} from '../persistence';
function Welcome(props) {
    const sizes = {width: 200, height: 180}
    const steps = [{
        title: "Choose a skill to practice",
        renderIcon: () => <img alt="" src={`${getServerHome()}/images/devfocus.svg`} style={sizes} />,
        text: `With web development languages and frameworks to explore, ${appName} has something for you!`
    },
    {
        title: "Complete a skill Challenge",
        renderIcon: () => <img alt="" src={`${getServerHome()}/images/developer.svg`} style={sizes} />,
        text: "For programming challenges, you can code on your machine, or directly online, preview your results, execute simple tests and submit your code for review."
    },
    {
        title: "Submit your solution for review",
        renderIcon: () => <img alt="" src={`${getServerHome()}/images/codereview.svg`} style={sizes} />,
        text: "Having a mentor review your solution is one of the best way to learn. Then you can also view solutions of other students in the community."
    },
    {
        title: "Unlock new concepts and exercises",
        renderIcon: () => <img alt="" src={`${getServerHome()}/images/checkboxes.svg`} style={sizes} />,
        text: "This is the fun part. You get the chance to unlock exercises as your solution gets approved by a mentor."
    },
    {
        title: "Complete your track and achieve proficiency",
        renderIcon: () => <img alt="skill challenge" src={`${getServerHome()}/images/feelingproud.svg`} style={sizes} />,
        text: "At the end of your track, you would have mastered the core concepts and how to apply them in real life. You will be set for expertise."
    },
    ];
    return (
        <div className="animate__animated animate__fadeIn animate__slower">
            <Banner />
            <div style={{textAlign: 'center'}}>
                <h3 >How {appName} works</h3>
                <p>
                    You may have watched several videos, yet you cannot build your app. We believe a focus on individual practice and mentor-based learning can help you.
                    Here's how it works.
                </p>
                {
                    steps.map(
                        (s, index) => <WorkStep key={"step" + index} order={index + 1} {...s}/>
                    )
                }
            </div>
        </div>
    );
}

export default Welcome;