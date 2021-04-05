import { ExternalLinkWithSVGIcon } from './shared';

export const H1 = (slugPrefix = '') => ({ children }) => {
  let slug = slugify(children);
  slug = slugPrefix ? `${slugPrefix}-${slug}` : slug;
  return (
    <h1 className="text-xl my-8 uppercase font-bold" id={slug}>
      <a href={`#${slug}`}>{children}</a>
    </h1>
  );
};
export const H2 = (slugPrefix = '') => ({ children }) => {
  let slug = slugify(children);
  slug = slugPrefix ? `${slugPrefix}-${slug}` : slug;
  return (
    <h2
      className="text-md mt-8 md:mt-12 mb-4 uppercase font-bold hover:text-temporalblue"
      id={slug}>
      <a href={`#${slug}`}>{children}</a>
    </h2>
  );
};
export const HX = (slugPrefix = '') => ({ children }) => {
  let slug = slugify(children);
  slug = slugPrefix ? `${slugPrefix}-${slug}` : slug;
  return (
    <h3 className="text-md mt-6 mb-4 font-bold hover:text-temporalblue" id={slug}>
      <a href={`#${slug}`}>{children}</a>
    </h3>
  );
};

export const A = ({ href, children }) => {
  if (href.includes('temporal.io')) {
    return (
      <a href={href} className="hover:underline text-blue-800 hover:text-blue-500">
        {children}
      </a>
    );
  }
  return (
    <ExternalLinkWithSVGIcon
      className="hover:underline text-blue-300 hover:text-blue-200"
      url={href}>
      {children}
    </ExternalLinkWithSVGIcon>
  );
};

export const Text = ({ children }) => <p className="mb-4">{children}</p>;
export const Strong = ({ children }) => <span className="font-bold">{children}</span>;
export const Em = ({ children }) => <span className="font-italic">{children}</span>;
export const Pre = ({ children }) => (
  <pre className="font-mono overflow-auto max-w-700">{children}</pre>
);
export const Code = ({ children }) => <code className="font-mono">{children}</code>;

export const OL = ({ children }) => <ol className="space-y-4 mb-4">{children}</ol>;
export const UL = ({ children }) => <ul className="space-y-4 mb-4">{children}</ul>;
export const LI = ({ children }) => <li className="list-disc ml-6">{children}</li>;
export const Blockquote = ({ children }) => (
  <div className=" border-l-2 border-temporalblue bg-lightgray text-spaceblack">{children}</div>
);
export const Del = ({ children }) => <code className="line-through">{children}</code>;
export const Hr = ({ children }) => <code className="my-4">{children}</code>;

// https://gist.github.com/codeguy/6684588
function slugify(str) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
  var to = 'aaaaeeeeiiiioooouuuunc------';
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return str;
}
