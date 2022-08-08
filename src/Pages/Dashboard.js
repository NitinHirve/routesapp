import React, { useState, useEffect } from 'react';
import { of, interval, concat, Subject } from 'rxjs';
import { takeWhile, takeUntil, scan, startWith, repeatWhen, share, filter, tap } from 'rxjs/operators';
import { Typography, styled, Button } from '@mui/material'
import { Box } from '@mui/system';


const StyledTypography = styled(Typography)({
  margin: "50px 0 50px 0",
})

//emmites event after every one sec.
const countdownObservable = interval(1000).pipe(
  startWith(5),
  scan(time => time - 1),
  takeWhile(time => time > 0)
).pipe(
  share() //only one time executive. Pauses repeat call until it finish emitting data.
)

const action = new Subject()  // For actions ...e.g onClick

const snooze = action.pipe(filter(action => action === 'snooze')).pipe(tap(ev => console.log('Whats happened ? Ans => :', ev)))
const dismiss = action.pipe(filter(action => action === 'dismiss'))


// action.subscribe(console.log)

const snozeabbleAlarm = concat(countdownObservable, of('Wake up!!!')).pipe(
  repeatWhen(() => snooze)
)

const observable = concat(snozeabbleAlarm.pipe(
  takeUntil(dismiss)
), of('Have a nice day!!'))


const Dashboard = () => {

  const [state, setState] = useState();

  useEffect(() => {
    const sub = observable.subscribe(setState);
    return () => {
      console.log('Dashboard : Alarm clock component did unmount(Removed)');
      return sub.unsubscribe()
    };
  }, [])


  return (
    <>
      <StyledTypography
        variant="h4"
      >
        Dashboard
      </StyledTypography>

      <Typography variant="h5">
        Alarm clock
      </Typography>
      <Typography variant="h6">
        {state}
      </Typography>

      <Box>
        <Button
          variant="contained"
          sx={{ textTransform: "none", marginTop: '15px' }}
          color="primary"
          onClick={() => { action.next('snooze') }}
        >
          Snooze
        </Button>

        <Button
          variant="contained"
          sx={{ textTransform: "none", margin: '15px 0 0 15px' }}
          color="error"
          onClick={() => { action.next('dismiss') }}
        >
          Dismiss
        </Button>
      </Box>
    </>
  )
}

export default Dashboard