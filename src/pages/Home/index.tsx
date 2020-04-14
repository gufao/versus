import React from 'react';
import { useHistory} from 'react-router-dom';
import { Container, Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import { useAuth } from '../../auth';
import io from 'socket.io-client';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Home() {

  const classes = useStyles();
  const { user, token } = useAuth();
  const history = useHistory();

  const socket = io.connect(`https://core-titan.versusco.de/`, {
    query: {
      token: token
    }
  });

  socket.on('connect', () => {
    console.log('socket connected', socket.connected)
    socket.on('authentication', () => {
      console.log('autenticou')
    });
    socket.emit('authentication', {token}, () => {
      console.log('enviou token')
    });
  })
  
  const logoutUser = () => {
    localStorage.removeItem('@versusauthtoken');
    history.replace('/login');
  }

  const { username, tournamententries, riot, steam} = user.data;
  return (
    <Container>
      <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Dados do usuario:
        </Typography>
        <Typography variant="h5" component="h2">
          Nome: {username}
        </Typography>

        <Typography variant="h5" component="h2">
          Steam: 
          <br />
          DisplayName -> {steam.displayName} 
          <br /> 
          Steam64 -> {steam.steam64}
          <br />
          MainRole -> {steam.mainrole}
          <br />
          SecondaryRole -> {steam.secondaryrole}
        </Typography>

        <Typography variant="h5" component="h2">
          Riot: {riot}
        </Typography>

        {tournamententries.map((item: any,) => 
          <Typography className={classes.pos} color="textSecondary" key={item.tournament_id}>
            Campeonatos Inscritos:
            <br />
            Squad -> {item.squad_id}
            <br />
            Id do torneio -> {item.tournament_id}
          </Typography>  
        )}
      </CardContent>
    </Card>
      <button onClick={logoutUser}>Sair</button>
    </Container>
  );
}
