import Sphere from './Sphere';

const SphereSection = () => {
  return (
    <div>
      <h2 className="title text-white">api</h2>
      <p className="subtitle text-white">
        At build time, a Jamstack website uses data from one or more APIs to generate markup. These APIs can
        be a headless CMS like Prismic, a database like Supabase, or even a local JSON file!
      </p>
      <Sphere />
    </div>
  );
};

export default SphereSection;
