---
id: functional-specification
title: "Descriptions - Functional specification"
sidebar_label: Specification
description: An overview of how description tags work in Yoast SEO.
---

Every public page on a website should contain a unique, useful editorial summary of the content/purpose of that page, output in a _meta description_ tag.

A valid meta description tag takes the following format: `<meta name="description" content="{{VALUE}}" />`.

## Constructing {{values}}

### User-specified patterns
Whenever the user has defined a pattern/template for meta description values (e.g., using Yoast SEO's replacement variables), that pattern should be used.

### User-specified values
Whenever the user has defined a specific value for a page, that value should be used.
User-specified values override all patterns and defaults.

## Omitted by default
In all scenarios, Yoast prefers to output _no_ meta title by default, rather than an auto-generated value. It's our opinion that there are very few scenarios where auto-generated meta descriptions are a good _description_ of the page (e.g., they often simply extract the first paragraph, which is rarely a suitable candidate). Additionally, most search engines which rely on the meta descriptions are also sophisticated enough to evaluate the relationship between the search query and page content, and to extract or generate their own meta description.

## Providing an admin comment
When a page lacks a meta description value, the following comment should be output in the HTML code in place of the tag:

```<!-- Admin only notice: this page does not show a meta description because it does not have one, either write it for this page specifically or go into the [SEO - Search Appearance] menu and set up a template. -->```
