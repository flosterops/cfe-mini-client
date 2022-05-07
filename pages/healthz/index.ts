function Healthz() {}

export async function getServerSideProps(context: any) {
    context.res.end('');
    return { props: {} };
}

export default Healthz;
