import { Component } from "react"
import { Section } from "./Section/Section"
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions"
import { Statistic } from "./Statistic/Statistic"
import { Notification } from "./Notification/Notification"

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  heandleLeaveFeedback = option => {
    this.setState(prevState => ({  
        [option]: prevState[option] + 1
      })
  
    )
  }
  
  countTotalFeedback() { 
    const value = Object.values(this.state)
    const totalFeedBack = value.reduce((acc, value) => acc + value, 0)
    return totalFeedBack
  }

  countPositiveFeedbackPercentage = total => {
    const percentage = Math.round((this.state.good *100) / total)
    return percentage
  }

  render() { 
    const {good, neutral, bad} = this.state
    const option = Object.keys(this.state)
    const total = this.countTotalFeedback()
    
    return (
      <> 
        <Section title="Please leave feedback">
           <FeedbackOptions option={option} onLeaveFeedback={this.heandleLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistic good={good} neutral={neutral} bad={bad} total={total} positivePercentage={this.countPositiveFeedbackPercentage(total)} />) : (<Notification message="There is no feedback" />)}
        </Section>
      </>
  )
  }
  
}
