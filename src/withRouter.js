import { useParams, useLocation, useNavigate } from 'react-router-dom';

export function withRouter(Children) {
  return props => {
    const params = useParams(),
      location = useLocation(),
      history = useNavigate();
    return (
      <Children
        {...props}
        params={params}
        location={location}
        history={history}
      />
    );
  };
}
