// import personal info from OG website

export const LINKS =
  "https://github.com/johncmanuel/johncarlomanuel.com/blob/master/src/lib/public/links/links.json";

export const SELF =
  "https://github.com/johncmanuel/johncarlomanuel.com/blob/master/src/lib/public/self/self.json";

export const getLinksData = async () => {
  try {
    const res = await fetch(LINKS);
    if (!res.ok) {
      throw new Error("Failed to fetch links data");
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getSelfData = async () => {
  try {
    const res = await fetch(SELF);
    if (!res.ok) {
      throw new Error("Failed to fetch self data");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
