import React from "react";
const Cloud = props => {
    const c = {
        cloud: `white`,
    };
    // console.log(props);
    const { cloud } = props;
    if (cloud) {
        if (cloud.backgroundColor) {
            c.cloud = cloud.backgroundColor;
        }
    }
    return (
        <React.Fragment>
            <svg {...props} viewBox="0 0 500 500">
                <g id="Cloud" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(0.000000, 0.000000)" fill={c.cloud}>
                        <g id="Group-6" transform="translate(0.000000, -0.000000)">
                            <path d="M165.139,40.836 C160.854,40.836 11.213,40.51 0.829,40.51 C0.829,39.066 5.217,37.896 10.629,37.896 C12.572,37.896 14.377,38.049 15.901,38.309 C16.358,32.414 21.276,27.77 27.289,27.77 C30.545,27.77 33.476,29.138 35.558,31.322 C37.546,21.47 46.249,14.05 56.688,14.05 C60.214,14.05 63.533,14.914 66.472,16.415 C70.988,6.854 80.716,0.237 91.991,0.237 C107.572,0.237 120.204,12.868 120.204,28.45 L120.202,28.513 C123.097,25.632 127.086,23.85 131.493,23.85 C139.144,23.85 145.53,29.222 147.113,36.397 C148.041,35.701 149.19,35.283 150.439,35.283 C152.824,35.283 154.852,36.79 155.639,38.901 C156.594,38.68 157.721,38.55 158.932,38.55 C162.359,38.55 165.139,39.574 165.139,40.836" id="Fill-4" fillRule="nonzero"></path>
                        </g>
                    </g>
                </g>
            </svg >
        </React.Fragment >
    )
};
export default Cloud;
