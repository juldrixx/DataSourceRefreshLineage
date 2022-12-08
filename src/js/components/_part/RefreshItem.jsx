import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardActionArea,
  CardContent,
  Collapse,
  Divider,
  Typography,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import RefreshCard from './RefreshCard';

function RefreshItem(props) {
  const [expand, setExpand] = React.useState(false);
  const { value } = props;

  return (
    <Card className="refresh-item">
      <CardActionArea onClick={() => setExpand(!expand)}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h7"
            component="div"
            sx={{ display: 'flex' }}
          >
            {value.id}
            <ExpandMore
              sx={{
                marginLeft: 'auto',
                transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
              }}
            />
          </Typography>
        </CardContent>
      </CardActionArea>
      <Collapse in={expand} timeout="auto" unmountOnExit>
        <Divider />
        <CardContent>
          <RefreshCard value={value} />
        </CardContent>
      </Collapse>
    </Card>
  );
}

RefreshItem.propTypes = {
  value: PropTypes.shape({
    id: PropTypes.string.isRequired,
    revision: PropTypes.number.isRequired,
    data_source_id: PropTypes.string.isRequired,
    notify_start_date: PropTypes.string.isRequired,
    refresh_start_date: PropTypes.string.isRequired,
    refresh_end_date: PropTypes.string.isRequired,
    refresh_state: PropTypes.string.isRequired,
    refresh_trigger_id: PropTypes.string.isRequired,
    run_url: PropTypes.string.isRequired,
    tables: PropTypes.objectOf({
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
  }).isRequired,
};

export default RefreshItem;
