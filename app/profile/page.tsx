'use client';

import { Avatar, Box, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'

export interface Profile {
  name: string,
  title: string,
  img: string,
  kudos: number,
  bio: string,
}

function getProfile(): Profile {
  return {
    name: 'Alan Wen',
    title: 'Senior in Informatics',
    img: 'https://media-exp1.licdn.com/dms/image/D5603AQF1Wa6asa3htQ/profile-displayphoto-shrink_800_800/0/1635008785422?e=1672876800&v=beta&t=8EGFsH6kEaeeuJbFUn419pRk-Jut6iMyqWqpTUaT6rE',
    kudos: 42,
    bio: 'The iSchool is my school!'
  }
}

export default function Profile() {
  const profile = getProfile()
  return (
    <Grid container sx={{ padding: "2em" }} >
      <Grid xs={12}>
        <Stack direction="column" alignItems='center' spacing={2}>
          <Typography fontSize={"4rem"}><b>{profile.name}</b></Typography>
          <Typography fontSize={"2rem"}><em>{profile.title}</em></Typography>
          <Avatar
            alt={profile.name}
            src={profile.img}
            sx={{ width: "16rem", height: "16rem" }}
          />
          <Typography fontSize={"2rem"}><b>{profile.kudos} Kudos</b></Typography>
          <Typography fontSize={"2rem"}><em>"{profile.bio}"</em></Typography>
        </Stack>
      </Grid>
      <Grid xs={12}>
        <Typography fontSize={"3rem"}><b>Projects</b></Typography>
        <Stack direction="row" spacing={2}>
          <Box sx={{ height: 200, width: 200, backgroundColor: "gray" }} />
          <Box sx={{ height: 200, width: 200, backgroundColor: "gray" }} />
          <Box sx={{ height: 200, width: 200, backgroundColor: "gray" }} />
        </Stack>
      </Grid>
      <Grid xs={12}>
        <Typography fontSize={"3rem"}><b>Recommendations</b></Typography>
        <Stack direction="column" spacing={2}>
          <Recommendation imgSrc={profile.img} />
          <Recommendation imgSrc={profile.img} />
          <Recommendation imgSrc={profile.img} />
        </Stack>
      </Grid>
    </Grid>
  )
}

function Recommendation(props: { imgSrc: string }) {
  return (
    <Stack direction="row">
      <Avatar
        src={props.imgSrc}
        sx={{ width: "8rem", height: "8rem" }}
      />
      <Typography fontSize={"2rem"} sx={{ padding: "0 1em" }}>Recommendation words</Typography>
    </Stack>
  )
}