const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

// In a React project, reportWebVitals is a utility provided by Create React App (CRA) that helps measure and report the performance of your application using web vitals metrics. Web vitals are a set of metrics defined by Google to quantify the user experience on a website, particularly in terms of loading performance, interactivity, and visual stability.