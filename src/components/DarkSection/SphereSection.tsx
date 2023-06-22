import Sphere from './Sphere';

const SphereSection = () => {
  return (
    <div className="text-center">
      <h2 className="title mb-10 text-white">api</h2>
      <p className="subtitle m-auto mb-10 w-2/4 text-white">
        At build time, a Jamstack website uses data from one or more APIs to generate markup. These APIs can
        be a headless CMS like Prismic, a database like Supabase, or even a local JSON file!
      </p>
      <Sphere />
    </div>
  );
};

export default SphereSection;
