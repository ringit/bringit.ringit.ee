import React from 'react';

export interface FairownLogoProps extends React.HTMLProps<HTMLOrSVGElement> {}

function FairownLogo({ className }: FairownLogoProps) {
  return (
    <svg viewBox="0 0 136.855 26" className={className}>
      <g>
        <path
          d="M49.8 20V2.96h10.49v3.648h-6.672V9.68h5.208v3.648h-5.208V20H49.8z"
        ></path>
        <path
          d="M66.173 20.264c-1.552 0-2.872-.616-3.96-1.848-1.072-1.232-1.608-2.704-1.608-4.416 0-1.712.536-3.184 1.608-4.416 1.088-1.232 2.408-1.848 3.96-1.848 1.376 0 2.464.488 3.264 1.464V8h3.624v12h-3.624v-1.2c-.8.976-1.888 1.464-3.264 1.464zm-1.176-4.128c.512.56 1.176.84 1.992.84.816 0 1.472-.28 1.968-.84.512-.56.768-1.272.768-2.136 0-.864-.256-1.576-.768-2.136-.496-.56-1.152-.84-1.968-.84-.816 0-1.48.28-1.992.84-.496.56-.744 1.272-.744 2.136 0 .864.248 1.576.744 2.136z"
        ></path>
        <path
          d="M77.844 6.368a2.207 2.207 0 0 1-1.584-.648 2.194 2.194 0 0 1-.672-1.608c0-.624.224-1.152.672-1.584.447-.448.975-.672 1.584-.672.64 0 1.175.224 1.608.672.448.432.672.96.672 1.584 0 .624-.224 1.16-.672 1.608-.433.432-.968.648-1.608.648zM76.044 20V8h3.624v12h-3.625z"
        ></path>
        <path
          d="M82.653 20V8h3.624v1.8c.192-.544.552-1 1.08-1.368a2.947 2.947 0 0 1 1.776-.576c.416 0 .808.048 1.176.144v3.672a4.954 4.954 0 0 0-1.608-.288c-.768 0-1.368.272-1.8.816-.416.528-.624 1.232-.624 2.112V20h-3.624z"
        ></path>
        <path
          d="M101.943 18.464c-1.232 1.2-2.72 1.8-4.464 1.8-1.744 0-3.232-.6-4.464-1.8-1.232-1.216-1.848-2.704-1.848-4.464 0-1.76.616-3.24 1.848-4.44 1.232-1.216 2.72-1.824 4.464-1.824 1.744 0 3.232.608 4.464 1.824 1.232 1.2 1.848 2.68 1.848 4.44 0 1.76-.616 3.248-1.848 4.464zm-6.384-2.376c.512.528 1.152.792 1.92.792s1.4-.264 1.896-.792c.512-.528.768-1.224.768-2.088 0-.864-.256-1.56-.768-2.088-.496-.528-1.128-.792-1.896-.792s-1.408.264-1.92.792c-.496.528-.744 1.224-.744 2.088 0 .864.248 1.56.744 2.088z"
        ></path>
        <path
          d="M116.105 20l-2.064-6.336-2.04 6.336h-3.648l-3.96-12h3.888l2.088 7.368L112.649 8h2.784l2.28 7.368L119.801 8h3.888l-3.936 12h-3.648z"
        ></path>
        <path
          d="M125.239 20V8h3.624v1.224c.688-.992 1.8-1.488 3.336-1.488 1.456 0 2.592.488 3.408 1.464.832.976 1.248 2.264 1.248 3.864V20h-3.624v-6.312c0-1.776-.648-2.664-1.944-2.664-.72 0-1.304.264-1.752.792-.448.528-.672 1.312-.672 2.352V20h-3.624z"
        ></path>
        <path
          d="M.496 5.074c-.856-1.16-.576-2.769.625-3.595 1.2-.826 2.868-.557 3.724.602l14.659 19.845c.856 1.16.576 2.769-.625 3.595-1.2.826-2.868.557-3.724-.602L.496 5.074z"
        ></path>
        <path
          d="M12.848 5.272l-2.66-3.704C9.72.915 10.181 0 10.978 0h22.415c1.442 0 2.61 1.184 2.607 2.642-.004 1.453-1.17 2.629-2.607 2.629H12.848z"
        ></path>
        <path
          d="M16.049 9.914L18.953 14l7.39-.189c2.494-.064 3.575-3.22 1.654-4.83a2.682 2.682 0 0 0-1.721-.627l-9.434-.004c-.796 0-1.258.91-.793 1.564z"
        ></path>
      </g>
    </svg>
  );
}

export { FairownLogo };
