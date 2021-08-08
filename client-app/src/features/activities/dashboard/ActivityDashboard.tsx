import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Activity } from '../../../app/models/Activity';
import ActivityList from './ActivityList';

interface Props {
    activities: Activity[];
}

export default function ActivityDashboard({activities}: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities}/>
            </Grid.Column>
        </Grid>
    )
}