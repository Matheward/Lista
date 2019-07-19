'use strict';

/**
 * Crud.js controller
 *
 * @description: A set of functions called "actions" for managing `Crud`.
 */

module.exports = {

  /**
   * Retrieve crud records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.crud.search(ctx.query);
    } else {
      return strapi.services.crud.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a crud record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.crud.fetch(ctx.params);
  },

  /**
   * Count crud records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.crud.count(ctx.query);
  },

  /**
   * Create a/an crud record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.crud.add(ctx.request.body);
  },

  /**
   * Update a/an crud record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.crud.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an crud record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.crud.remove(ctx.params);
  }
};
