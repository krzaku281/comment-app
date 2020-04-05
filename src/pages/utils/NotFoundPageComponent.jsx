import React from 'react';

export default function NotFoundPageComponent() {
  return (
    <div>
      No match for <code>{window.location.pathname}</code>
    </div>
  );
}
