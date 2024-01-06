import { SVGProps } from 'react';
interface CustomSVGProps extends SVGProps<SVGSVGElement> {
    width?: number;
    height?: number;
}
declare const CamsolLogo: ({ width, height, ...props }: CustomSVGProps) => JSX.Element;
export default CamsolLogo;
