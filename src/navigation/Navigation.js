import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Search from "../pages/search";
import DetailPage from "../pages/Detail/DetailPage";
import { storeData } from "../demo_data";
const Navigation = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Search />
        </Route>
        {storeData.map((item) => (
          <Route exact path={`/detail/${item.label}`}>
            <DetailPage
              key={item.id}
              description={item.description}
              state={item.state}
              uri={item.uri}
              thumbnail={item.thumbnail}
              market={item.market}
            />
          </Route>
        ))}
      </Switch>
    </Router>
  );
};

export default Navigation;
