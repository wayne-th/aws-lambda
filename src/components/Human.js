import * as React from "react";

function human({ sat_ratia }) {
  return (
    <svg className="human" width={146.667} height={344.002}>
      <defs>
        <style>
          { ".human_svg_c{fill:rgba(156,222,243,.11);stroke:#078ecf;stroke-width:2px}" }
        </style>
        
        {!isNaN(sat_ratia) && (
          <filter id="human_svg_a" primitiveUnits="objectBoundingBox" x="0%" y="0%" width="100%" height="100%" >
            <feFlood x="0%" y="0%" floodColor="#078ecf" />
            <feOffset dy={1 - sat_ratia}>
              <animate attributeName="dy" from={1} to={1 - sat_ratia}     dur="1s" />
            </feOffset>
            <feComposite operator="in" in2="SourceGraphic" />
            <feComposite in2="SourceGraphic" />
          </filter>
        ) }
      </defs>

      <rect width="100%" height="100%" fill="#13BFEF" filter="url(#human_svg_a)" />
      <path className="human_svg_c" d="M314.247,218.64v184.9h-.24c0-1-.018-1.991-.053-2.978-.222-8.258-1.671-15.342-3.209-22.836-.5-2.453-1.013-4.978-1.5-7.6a122.954,122.954,0,0,0-6.018-22.907l-.018-.044-.036-.089a99.19,99.19,0,0,0-5.209-10.142c-1.68-2.729-1.911-5.476-2.16-8.382v-.009a43.537,43.537,0,0,0-1.458-8.347,35.988,35.988,0,0,0-3.244-7.733,21.548,21.548,0,0,1-2.756-7.484,38.482,38.482,0,0,0-3.556-10.925c-3.076-5.778-8.009-8-13.218-10.356-1.3-.587-2.64-1.191-3.964-1.858-.987-.5-2.044-.96-3.164-1.458a37.137,37.137,0,0,1-6.569-3.413,9.319,9.319,0,0,1-4.018-5.484,25.605,25.605,0,0,1-.293-8.711c.027-.187.044-.356.053-.5.062-.809.08-1.058,1.769-1.76,1.884-1.422,2.409-4.053,2.871-6.373.027-.169.062-.338.1-.516.6-2.925-.1-3.92-.773-4.889a1.663,1.663,0,0,1-.249-1.52l.009-.053a27.764,27.764,0,0,0-.462-10.347,19.714,19.714,0,0,0-4.187-8.3,17.541,17.541,0,0,0-25.7,0,19.7,19.7,0,0,0-4.178,8.3,27.59,27.59,0,0,0-.471,10.347v.053a1.649,1.649,0,0,1-.24,1.529c-1.307,1.867-1.129,3.156-.7,5.271.533,2.622,1.031,5.093,2.9,6.507,1.44.871,1.6,1.458,1.733,1.973.027.1.053.187.08.276a26.934,26.934,0,0,1-.1,8.818c-.6,2.7-3.627,5.671-9.013,8.827a91.014,91.014,0,0,1-11.929,5.68l-.036.018a15.214,15.214,0,0,0-4.631,3.058,18.711,18.711,0,0,0-3.3,4.3,36.654,36.654,0,0,0-3.707,10.667,28.681,28.681,0,0,1-2.569,7.8,29.23,29.23,0,0,0-2.693,6.987,36.812,36.812,0,0,0-1.529,7.4c-.489,3.618-1,7.351-3,10.613a99.187,99.187,0,0,0-5.209,10.142l-.044.089-.018.053c-3.049,8.373-4.569,15.982-6.169,24.036-.72,3.627-1.467,7.378-2.364,11.244a93.411,93.411,0,0,0-2.2,18.045c-.018.836-.036,1.689-.036,2.516V218.64Z" transform="translate(-167.58 -218.64)"/>
      <path className="human_svg_c" d="M178.94,418.955a4.58,4.58,0,0,0,2.116,1.493,3.482,3.482,0,0,0,.951.151,3.181,3.181,0,0,0,2.942-2.453c.418-1.289.738-4.329-1.787-10.2a10.34,10.34,0,0,1-.533-7.8,48.816,48.816,0,0,1,2.756-6.782l.009-.018.329-.711c1.573-3.36,3.307-6.711,4.978-9.956l.018-.036,1.173-2.267c3.013-5.867,5.822-11.609,7.147-17.44a53.865,53.865,0,0,1,3.351-9.04c.836-1.9,1.644-3.858,2.489-5.964.231-.587.427-1.1.578-1.52.382-1.013.587-1.573.773-1.573.213,0,.4.711.8,2.276l.009.036c.053.24.124.489.2.756a74.076,74.076,0,0,1,1.538,7.618,49.223,49.223,0,0,1,.276,13.28,38.26,38.26,0,0,0,.116,11.351c.133,1.12.284,2.382.418,3.867a8.41,8.41,0,0,1-.6,3.858,28.866,28.866,0,0,0-1.307,7.271c-.053.6-.107,1.209-.178,1.858-.444,4.356-1.3,8.924-2.124,13.342v.027c-.862,4.587-1.742,9.333-2.169,13.9-.9,9.751-1.831,19.822-.711,29.929a132.478,132.478,0,0,1,1,20.9,79.1,79.1,0,0,1-1.751,12.524,120.524,120.524,0,0,0-2.471,20.418,135.153,135.153,0,0,0,1.138,20.507c.933,7.849,1.813,15.262.551,23.085a15.143,15.143,0,0,1-3.787,7.422,39.083,39.083,0,0,1-5.973,5.12,7.074,7.074,0,0,0-2.773,3.493,3.194,3.194,0,0,0,.3,2.738c1.351,2.018,5.324,2.471,7.947,2.773.6.071,1.111.124,1.538.2a21.648,21.648,0,0,0,3.3.364,8.308,8.308,0,0,0,5.484-2.1,5.651,5.651,0,0,1,2.871-.862c3.156-.4,5.876-.738,5.476-7.218a96.7,96.7,0,0,1,.756-18.071l.009-.08v-.08c.267-6.471,1.8-12.765,3.307-18.854a113.156,113.156,0,0,0,3.156-16.311A84.438,84.438,0,0,0,222.5,495.4a15.707,15.707,0,0,1,1.262-6.178c.471-1.138,1.022-2.213,1.556-3.253a41.438,41.438,0,0,0,1.8-3.876,48.3,48.3,0,0,0,2.542-11.52c.2-1.529.418-3.1.7-4.7,1-5.742,3.049-11.164,5.236-16.907l.009-.018.009-.027c1.511-3.991,3.076-8.116,4.32-12.471.213-.756.364-1.369.48-1.822.187-.72.276-1.084.364-1.084s.187.356.364,1.076c.116.453.276,1.076.5,1.84,1.244,4.356,2.809,8.489,4.32,12.48l.009.018c2.178,5.742,4.24,11.164,5.244,16.916.3,1.733.516,3.351.711,4.916a44.806,44.806,0,0,0,2.524,11.307q.827,2.04,1.84,3.973c1.413,2.791,2.747,5.422,2.782,9.333A85.319,85.319,0,0,0,259,510.164c.516,5.36,1.76,11.556,4.169,20.729,1.671,6.365,2.773,16.462,3.111,23.645a80.4,80.4,0,0,1-.044,9.022c-.409,6.48,2.32,6.818,5.476,7.218a5.687,5.687,0,0,1,2.871.871,8.3,8.3,0,0,0,5.484,2.089,20.455,20.455,0,0,0,3.289-.356h.009c.951-.151,2.747-.391,3.769-.444a9.143,9.143,0,0,0,.978.053,5.491,5.491,0,0,0,4.5-1.76,3.985,3.985,0,0,0,.533-3.556,7.008,7.008,0,0,0-2.764-3.493,38.151,38.151,0,0,1-6.222-5.5,14.174,14.174,0,0,1-3.547-7.04c-1.262-7.831-.382-15.236.56-23.085a137.492,137.492,0,0,0,1.138-20.507,121.233,121.233,0,0,0-2.48-20.409,79.349,79.349,0,0,1-1.751-12.533,131.534,131.534,0,0,1,1-20.907,99.044,99.044,0,0,0,.391-15.147,188.864,188.864,0,0,0-1.76-20.027c-.436-2.889-.987-5.822-1.511-8.649l-.089-.471a134.694,134.694,0,0,1-2.2-14.951,27,27,0,0,0-.667-4.924c-.16-.658-.356-1.253-.551-1.831a9.743,9.743,0,0,1-.693-4.178c.133-1.458.276-2.667.418-3.849v-.027a38.561,38.561,0,0,0,.116-11.351,48.65,48.65,0,0,1,.311-13.4,72.119,72.119,0,0,1,1.582-7.627c.089-.338.169-.649.24-.924.356-1.369.516-1.991.711-1.991.169,0,.364.524.72,1.458.142.382.311.818.516,1.342.8,1.991,1.653,4.107,2.578,6.24a54.394,54.394,0,0,1,3.36,9.04,43.477,43.477,0,0,0,2.062,6.471,145.871,145.871,0,0,0,6.524,13.671c1.12,2.151,2.276,4.365,3.351,6.578.96,1.947,2.4,5.218,2.916,6.436,1.511,3.627,2.5,6.018,1.751,9.431a28.135,28.135,0,0,1-1.262,3.9c-1.084,2.871-2.2,5.831-1.271,8.711a3.016,3.016,0,0,0,3.52,2.4,2.291,2.291,0,0,0,.373-.1,4.9,4.9,0,0,0,2.071-1.422,8.612,8.612,0,0,0,1.129-1.689c.178-.32.293-.533.364-.533.009,0,.018.009.027.018a12.3,12.3,0,0,1-.009,2.916c-.142,3.067-.56,6.133-.978,9.1l-.053.382c-.4,2.9.089,5.307,1.387,6.8a4.051,4.051,0,0,0,3.084,1.449,4.533,4.533,0,0,0,3.156-1.351,7.508,7.508,0,0,0,2.027-4.044,82.8,82.8,0,0,0,1.289-14.507h.24v159.1H167.58V417.773a80.157,80.157,0,0,0,1.28,14.285,7.5,7.5,0,0,0,2.027,4.053,4.529,4.529,0,0,0,3.147,1.351,4.081,4.081,0,0,0,3.084-1.449c1.3-1.493,1.8-3.911,1.4-6.8-.462-3.3-.8-5.8-.951-8-.044-.613-.071-1.236-.089-1.893-.027-1.156-.027-1.68.089-1.8a.081.081,0,0,1,.062-.027c.133,0,.373.3.764.791C178.549,418.475,178.727,418.706,178.94,418.955Z" transform="translate(-167.58 -232.661)"/>
    </svg>
  );
}

export default human;
