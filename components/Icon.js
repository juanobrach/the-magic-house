import React from "react";
export const Icon = ({ name, width, height, size }) => {
  const getViewBox = (viewBox) => {
    switch (viewBox) {
      case "soundcloud":
        return "0 0 24 24";
      case "instagram":
        return "0 0 24 24";
      case "youtube":
        return "0 0 24 24";
      case "venmo":
        return "0 0 792 612";
      case "eventbrite":
        return "0 0 200 36";
    }
  };

  const getIcon = (name) => {
    switch (name) {
      case "soundcloud":
        return (
          <path
            fill="white"
            d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m-.899.828c-.06 0-.091.037-.104.094L0 14.479l.165 1.308c0 .055.045.094.09.094s.089-.045.104-.104l.21-1.319-.21-1.334c0-.061-.044-.09-.09-.09m1.83-1.229c-.061 0-.12.045-.12.104l-.21 2.563.225 2.458c0 .06.045.12.119.12.061 0 .105-.061.121-.12l.254-2.474-.254-2.548c-.016-.06-.061-.12-.121-.12m.945-.089c-.075 0-.135.06-.15.135l-.193 2.64.21 2.544c.016.077.075.138.149.138.075 0 .135-.061.15-.15l.24-2.532-.24-2.623c0-.075-.06-.135-.135-.135l-.031-.017zm1.155.36c-.005-.09-.075-.149-.159-.149-.09 0-.158.06-.164.149l-.217 2.43.2 2.563c0 .09.075.157.159.157.074 0 .148-.068.148-.158l.227-2.563-.227-2.444.033.015zm.809-1.709c-.101 0-.18.09-.18.181l-.21 3.957.187 2.563c0 .09.08.164.18.164.094 0 .174-.09.18-.18l.209-2.563-.209-3.972c-.008-.104-.088-.18-.18-.18m.959-.914c-.105 0-.195.09-.203.194l-.18 4.872.165 2.548c0 .12.09.209.195.209.104 0 .194-.089.21-.209l.193-2.548-.192-4.856c-.016-.12-.105-.21-.21-.21m.989-.449c-.121 0-.211.089-.225.209l-.165 5.275.165 2.52c.014.119.104.225.225.225.119 0 .225-.105.225-.225l.195-2.52-.196-5.275c0-.12-.105-.225-.225-.225m1.245.045c0-.135-.105-.24-.24-.24-.119 0-.24.105-.24.24l-.149 5.441.149 2.503c.016.135.121.24.256.24s.24-.105.24-.24l.164-2.503-.164-5.456-.016.015zm.749-.134c-.135 0-.255.119-.255.254l-.15 5.322.15 2.473c0 .15.12.255.255.255s.255-.12.255-.27l.15-2.474-.165-5.307c0-.148-.12-.27-.271-.27m1.005.166c-.164 0-.284.135-.284.285l-.103 5.143.135 2.474c0 .149.119.277.284.277.149 0 .271-.12.284-.285l.121-2.443-.135-5.112c-.012-.164-.135-.285-.285-.285m1.184-.945c-.045-.029-.105-.044-.165-.044s-.119.015-.165.044c-.09.054-.149.15-.149.255v.061l-.104 6.048.115 2.449v.008c.008.06.03.135.074.18.058.061.142.104.234.104.08 0 .158-.044.209-.09.058-.06.091-.135.091-.225l.015-.24.117-2.203-.135-6.086c0-.104-.061-.193-.135-.239l-.002-.022zm1.006-.547c-.045-.045-.09-.061-.15-.061-.074 0-.149.016-.209.061-.075.061-.119.15-.119.24v.029l-.137 6.609.076 1.215.061 1.185c0 .164.148.314.328.314.181 0 .33-.15.33-.329l.15-2.414-.15-6.637c0-.12-.074-.221-.165-.277m8.934 3.777c-.405 0-.795.086-1.139.232-.24-2.654-2.46-4.736-5.188-4.736-.659 0-1.305.135-1.889.359-.225.09-.27.18-.285.359v9.368c.016.18.15.33.33.345h8.185C22.681 17.218 24 15.914 24 14.28s-1.319-2.952-2.938-2.952"
          />
        );

      case "instagram":
        return (
          <path
            fill="white"
            d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
          />
        );

      case "youtube":
        return (
          <path
            fill="white"
            d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
          />
        );
      case "venmo":
        return (
          <g>
            <path
              fill="#3D95CE"
              d="M202.376,250.999c3.895,6.433,5.651,13.059,5.651,21.429c0,26.696-22.789,61.376-41.285,85.728h-42.246
            l-16.943-101.312l36.991-3.512l8.958,72.09c8.37-13.636,18.699-35.065,18.699-49.675c0-7.997-1.37-13.444-3.511-17.929
            L202.376,250.999z"
            />
            <path
              fill="#3D95CE"
              d="M250.318,295.611c6.807,0,23.944-3.114,23.944-12.854c0-4.677-3.307-7.01-7.204-7.01
            C260.24,275.747,251.293,283.923,250.318,295.611z M249.538,314.901c0,11.893,6.613,16.559,15.38,16.559
            c9.547,0,18.688-2.333,30.569-8.371l-4.475,30.388c-8.371,4.09-21.417,6.819-34.08,6.819c-32.121,0-43.617-19.48-43.617-43.833
            c0-31.564,18.7-65.079,57.253-65.079c21.226,0,33.095,11.892,33.095,28.451C303.665,306.53,269.403,314.708,249.538,314.901z"
            />
            <path
              fill="#3D95CE"
              d="M410.414,274.773c0,3.896-0.591,9.547-1.179,13.24l-11.1,70.142h-36.019l10.125-64.298
            c0.192-1.744,0.782-5.255,0.782-7.203c0-4.677-2.922-5.844-6.435-5.844c-4.666,0-9.343,2.141-12.458,3.704l-11.484,73.642h-36.222
            l16.548-105.015h31.35l0.397,8.382c7.396-4.87,17.135-10.137,30.953-10.137C403.979,251.384,410.414,260.739,410.414,274.773z"
            />
            <path
              fill="#3D95CE"
              d="M517.344,262.88c10.316-7.396,20.057-11.496,33.488-11.496c18.495,0,24.928,9.355,24.928,23.389
            c0,3.896-0.589,9.547-1.177,13.24l-11.087,70.142h-36.029l10.318-65.657c0.19-1.755,0.589-3.896,0.589-5.254
            c0-5.266-2.923-6.434-6.435-6.434c-4.474,0-8.946,1.948-12.266,3.704l-11.482,73.642h-36.02l10.318-65.657
            c0.19-1.755,0.577-3.896,0.577-5.254c0-5.266-2.924-6.434-6.424-6.434c-4.676,0-9.343,2.141-12.458,3.704l-11.493,73.642h-36.21
            l16.546-105.015h30.967l0.973,8.767c7.204-5.254,16.935-10.521,29.98-10.521C506.242,251.384,513.637,256.255,517.344,262.88z"
            />
            <path
              fill="#3D95CE"
              d="M647.444,293.472c0-8.573-2.144-14.418-8.564-14.418c-14.215,0-17.134,25.131-17.134,37.987
            c0,9.753,2.729,15.789,9.147,15.789C644.329,332.83,647.444,306.327,647.444,293.472z M585.141,315.489
            c0-33.117,17.52-64.105,57.83-64.105c30.374,0,41.477,17.929,41.477,42.676c0,32.733-17.331,66.631-58.613,66.631
            C595.265,360.691,585.141,340.621,585.141,315.489z"
            />
          </g>
        );

      case "eventbrite":
        return (
          <g fill="white">
            <path d="M186.292 17.513c2.693-.61 5.381.495 6.878 2.584l-11.905 2.693c.411-2.52 2.333-4.668 5.027-5.277zm6.945 9.91a6.57 6.57 0 01-3.98 2.679c-2.711.614-5.417-.51-6.907-2.626l11.941-2.702 1.945-.44 3.72-.841a11.782 11.782 0 00-.31-2.372c-1.514-6.426-8.056-10.432-14.612-8.949-6.556 1.484-10.644 7.896-9.13 14.321 1.513 6.426 8.055 10.433 14.611 8.95 3.863-.875 6.868-3.46 8.376-6.751l-5.654-1.269zM165.135 35.118V18.082h-3.677v-5.804h3.677V4.289h6.244v7.989h4.69v5.804h-4.69v17.036zM153.207 35.118h6.03v-22.84h-6.03v22.84zm-.784-30.853c0-2.114 1.667-3.7 3.824-3.7s3.775 1.586 3.775 3.7c0 2.115-1.618 3.748-3.775 3.748s-3.824-1.633-3.824-3.748zM151.108 12.342c-3.083.16-4.901.633-6.75 1.973v-2.037h-6.027v22.84h6.026v-11.2c0-3.524.86-5.529 6.751-5.726v-5.85zM117.507 24.057c.15 3.333 3.051 6.128 6.602 6.128 3.602 0 6.553-2.942 6.553-6.422 0-3.432-2.951-6.373-6.553-6.373-3.55 0-6.452 2.843-6.602 6.128v.539zm-5.88 11.061V1.38l6.03-1.364v13.962c1.863-1.49 4.07-2.115 6.472-2.115 6.864 0 12.355 5.286 12.355 11.918 0 6.583-5.49 11.965-12.355 11.965-2.402 0-4.609-.624-6.472-2.114v1.487h-6.03zM98.792 35.118V17.965h-3.677v-5.687h3.677V4.283l6.244-1.413v9.408h4.69v5.687h-4.69v17.153zM87.742 35.118V22.915c0-4.421-2.403-5.382-4.806-5.382-2.402 0-4.804.913-4.804 5.286v12.299h-6.03v-22.84h6.03v1.699c1.323-.961 2.941-2.115 6.129-2.115 5.098 0 9.511 2.932 9.511 10.092v13.164h-6.03zM56.831 17.513c2.694-.61 5.382.495 6.878 2.584L51.805 22.79c.41-2.52 2.333-4.668 5.026-5.277zm6.945 9.91a6.57 6.57 0 01-3.98 2.679c-2.71.614-5.416-.51-6.907-2.626l11.942-2.702 1.945-.44 3.719-.841a11.782 11.782 0 00-.31-2.372c-1.514-6.426-8.056-10.432-14.612-8.949-6.556 1.484-10.644 7.896-9.13 14.321 1.514 6.426 8.055 10.433 14.612 8.95 3.863-.875 6.868-3.46 8.375-6.751l-5.654-1.269zM32.238 35.118l-9.365-22.84h6.57l5.933 15.49 5.981-15.49h6.57l-9.364 22.84zM11.05 17.507c2.694-.61 5.382.495 6.879 2.584L6.024 22.785c.41-2.52 2.333-4.668 5.026-5.278zm6.945 9.91a6.57 6.57 0 01-3.98 2.68c-2.71.613-5.416-.51-6.907-2.626l11.942-2.702 1.945-.44 3.719-.842a11.782 11.782 0 00-.31-2.371c-1.514-6.426-8.055-10.433-14.612-8.95C3.236 13.65-.85 20.063.662 26.489c1.514 6.426 8.056 10.432 14.612 8.949 3.863-.874 6.868-3.46 8.376-6.75l-5.655-1.27z"></path>
          </g>
        );
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "30px"}
      height={size || "30px"}
      viewBox={getViewBox(name)}
    >
      {getIcon(name)}
    </svg>
  );
};
