import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Restau_card from "./Restau_card"; // Importing your restaurant card component
import PartnerDetailPage from "./PartnerDetailPage"; // Importing your detail page

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Restau_card} />
        <Route path="/partner-detail/:restaurantName" component={PartnerDetailPage} />
      </Switch>
    </Router>
  );
};

export default App;
