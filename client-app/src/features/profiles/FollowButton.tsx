import { observer } from "mobx-react-lite";
import React from "react";
import { Reveal, Button } from "semantic-ui-react";
import { Profile } from "../../app/models/Profile";
import { useStore } from "../../app/stores/store";

interface Props {
    profile: Profile;
}

export default observer(function FollowButton({profile}: Props) {
    const {profileStore, userStore} = useStore();
    const {updateFollowing, loading} = profileStore;

    if(userStore.user?.username === profile.username) return null;

    return (
        <Reveal animated="move">
            <Reveal.Content visible style={{width: '100%'}}>
                <Button fluid color="teal" content='Following' />
            </Reveal.Content>
            <Reveal.Content hidden style={{width: '100%'}}>
                <Button fluid basic color={true ? 'red' : 'green'} content={true ? 'Unfollow' : 'Follow'} />
            </Reveal.Content>
        </Reveal>
    )
})