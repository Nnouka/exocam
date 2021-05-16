import React from 'react';
import { appName } from '../constants';
import Banner from './_parts/banner/Banner';
import WorkStep from './_parts/work-step/WorkStep';

function Welcome(props) {
    return (
        <div className="animate__animated animate__fadeIn animate__slower">
            <Banner />
            <div style={{textAlign: 'center'}}>
                <h3 >How {appName} works</h3>
                <p>
                    You may have watched several videos, yet you cannot build your app. We believe a focus on individual practice and mentor-based learning can help you.
                    Here's how it works.
                </p>
                <WorkStep />
            </div>
        </div>
    );
}

export default Welcome;