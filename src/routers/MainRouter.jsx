import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const NotFoundPageComponent = lazy(() => import('pages/utils/NotFoundPageComponent'));
const HomePageContainer = lazy(() => import('pages/homePage/HomePageContainer'));
const CommentPageContainer = lazy(() => import('pages/commentPage/CommentPageContainer'));

function MainRouter() {
  return (
    <Suspense fallback={<div>Page is loading...</div>}>
      <Switch>
        <Route path="/" exact component={HomePageContainer}></Route>
        <Route path="/comments" component={CommentPageContainer}></Route>
        <Route path="*" component={NotFoundPageComponent}></Route>
      </Switch>
    </Suspense>
  );
}

export default MainRouter;
