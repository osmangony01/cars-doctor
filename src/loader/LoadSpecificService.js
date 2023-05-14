
const LoadSpecificService = async ({ params }) => {
    const id = params.id;
    const loadSpecificService = await fetch(`http://localhost:5000/service/${id}`);
    const loadService = await loadSpecificService.json();
    return loadService;
}

export default LoadSpecificService;