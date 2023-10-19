import { Path } from "../routes"

export const menuOptions = (path: string) => {

  return ([
    {
      name: 'Dashboard',
      pathname: Path.HOME,
      active: path === Path.HOME,
    },
    {
      name: 'Clients',
      pathname: Path.CLIENTS,
      active: path === Path.CLIENTS,
    },
    {
      name: 'Calendar',
      pathname: Path.CALENDAR,
      active: path === Path.CALENDAR,
    },
    {
      name: 'Workouts',
      pathname: Path.WORKOUT_PLAN,
      active: path === Path.WORKOUT_PLAN,
      options: [
      ]
    },
    {
      name: 'Diet plan',
      pathname: Path.DIET_PLAN,
      active: path === Path.DIET_PLAN,
      options: [

      ]
    },
    {
      name: 'Habits',
      active: path === Path.HABITS,
      pathname: Path.HABITS,
    },
  ]
  )
}