import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain';
import Snowflake from 'react-icons/lib/ti/weather-snow';
import Calendar from 'react-icons/lib/fa/calendar';


const decimalToPercent = (decimal) =>{
  return( (decimal*100)+'%')
}

const calcGoalProgress = (total, goal) => {
  return(decimalToPercent(total/goal))
}

export const SkiDayCount = ({total, powder, backcountry, goal=100}) => (
      <div className="ski-day-count">
        <div className="total-days">
          <span>{total} days</span>
            <Calendar />
        </div>

        <div className="powder-days">
          <span>{powder} days</span>
          <Snowflake />
        </div>

        <div className="backcountry-days">
          <span>{backcountry} days</span>
          <Terrain />
        </div>

        <div>
          <span>{calcGoalProgress(total, goal)}</span>
        </div>
      </div>
  )
