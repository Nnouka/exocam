import React, {useEffect, useState} from 'react';
import {getDaySummary, getTodayOpeningStock, getTodaySales} from "../api/ReportsAPI";
import {DataGrid} from "@material-ui/data-grid";
import {connect} from "react-redux";
import {setActiveRoute} from "../features/actions/activeRoute";
import {REFS} from "../navigation/refs";
import {Table} from "@material-ui/core";

function Dashboard(props) {

    return (
        <div className="animate__animated animate__fadeIn" style={{backgroundColor: '#efefef', paddingTop: 20}}>
            <h3 style={{textAlign: 'center'}}>Today's Summary ({(new Date()).toDateString()})</h3>
        </div>
    );
}

export default connect()(Dashboard);
