import classes from '../data/classes';

export default function Classes() {
  return (
    <div>
      <h2>Debug: Number of classes: {classes.length}</h2>

      {classes.map(cls => (
        <div key={cls.slug} style={{ border: '1px solid gray', padding: '10px', margin: '10px 0' }}>
          <h3>{cls.name}</h3>
          <p>{cls.description}</p>

          <h4>Subclasses</h4>
          <ul>
            {cls.subclasses && cls.subclasses.length > 0 ? (
              cls.subclasses.map(sub => (
                <li key={sub.slug}>
                  <b>{sub.name}</b>: {sub.description?.substring(0, 100)}...
                </li>
              ))
            ) : (
              <li>No subclasses found</li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}