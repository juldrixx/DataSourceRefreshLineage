import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { Alarm, OpenInNew, Fingerprint } from '@mui/icons-material';
import colorVariables from '../../../stylesheets/imports/_variable.scss';

function TableCard(props) {
  const { id, tableId, value } = props;

  const generateColor = (state) => {
    switch (state) {
      case 'updated':
        return colorVariables.green;
      case 'planned':
        return colorVariables.orange;
      case 'canceled':
        return colorVariables.red;
      default:
        return null;
    }
  };

  return (
    <Card
      sx={{
        minWidth: '300px',
        backgroundColor: generateColor(value.refresh_state),
        color: 'white',
        marginTop: '10px',
        marginBottom: '10px',
      }}
      id={`table-${id}-${tableId}`}
      className="table-card"
    >
      <CardContent color="error">
        <Typography variant="body2" color="text.tertiary">
          <List>
            <ListItem disableGutters>
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <Fingerprint />
              </ListItemIcon>
              <ListItemText>{id}</ListItemText>
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <Alarm />
              </ListItemIcon>
              <ListItemText>
                {new Date(value.updated_at).toLocaleString()}
              </ListItemText>
            </ListItem>
          </List>
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ display: 'flex', justifyContent: 'flex-end' }}
      >
        <IconButton target="_blank" href={value.run_url}>
          <OpenInNew />
        </IconButton>
      </CardActions>
    </Card>
  );
}

TableCard.propTypes = {
  id: PropTypes.string.isRequired,
  tableId: PropTypes.string.isRequired,
  value: PropTypes.shape({
    unique_refresh_id: PropTypes.string.isRequired,
    table: PropTypes.shape({
      schema: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    refresh_state: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
    dag_id: PropTypes.string.isRequired,
    task_id: PropTypes.string.isRequired,
    run_id: PropTypes.string.isRequired,
    run_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default TableCard;
