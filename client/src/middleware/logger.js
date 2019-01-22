const logger = store => next => action => {
   process.env.REACT_APP_SHOW_MIDDLWARE_CONSOLES==='true'&&console.group(action.type)
   process.env.REACT_APP_SHOW_MIDDLWARE_CONSOLES==='true'&&console.info('dispatching', action)
   let result = next(action)
   process.env.REACT_APP_SHOW_MIDDLWARE_CONSOLES==='true'&&console.log('next state', store.getState())
   process.env.REACT_APP_SHOW_MIDDLWARE_CONSOLES==='true'&&console.groupEnd()
   return result
}

export default logger