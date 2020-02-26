/**
 * @module formats
 * @description
 * Validators as string for format keyword rules.
 * A validator is a string, which when executed returns `false` if test is failed, `true` otherwise.
 */

import { expression } from './template';

export default {
  alpha: expression`!/^[a-zA-Z]+$/.test(${'data'})`,
  alphanumeric: expression`!/^[a-zA-Z0-9]+$/.test(${'data'})`,
  identifier: expression`!/^[-_a-zA-Z0-9]+$/.test(${'data'})`,
  hexadecimal: expression`!/^[a-fA-F0-9]+$/.test(${'data'})`,
  numeric: expression`!/^[0-9]+$/.test(${'data'})`,
  'date-time': expression`isNaN(Date.parse(${'data'})) || ~${'data'}.indexOf(\'/\')`,
  uppercase: expression`${'data'} !== ${'data'}.toUpperCase()`,
  lowercase: expression`${'data'} !== ${'data'}.toLowerCase()`,
  hostname: expression`${'data'}.length >= 256 || !/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])(\\.([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9]))*$/.test(${'data'})`,
  uri: expression`!/^[A-Za-z][A-Za-z0-9+\\-.]*:(?:\\/\\/(?:(?:[A-Za-z0-9\\-._~!$&\'()*+,;=:]|%[0-9A-Fa-f]{2})*@)?(?:\\[(?:(?:(?:(?:[0-9A-Fa-f]{1,4}:){6}|::(?:[0-9A-Fa-f]{1,4}:){5}|(?:[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,1}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){3}|(?:(?:[0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){2}|(?:(?:[0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}:|(?:(?:[0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})?::)(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))|(?:(?:[0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})?::)|[Vv][0-9A-Fa-f]+\\.[A-Za-z0-9\\-._~!$&\'()*+,;=:]+)\\]|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|(?:[A-Za-z0-9\\-._~!$&\'()*+,;=]|%[0-9A-Fa-f]{2})*)(?::[0-9]*)?(?:\\/(?:[A-Za-z0-9\\-._~!$&\'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*|\\/(?:(?:[A-Za-z0-9\\-._~!$&\'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:\\/(?:[A-Za-z0-9\\-._~!$&\'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)?|(?:[A-Za-z0-9\\-._~!$&\'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:\\/(?:[A-Za-z0-9\\-._~!$&\'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*|)(?:\\?(?:[A-Za-z0-9\\-._~!$&\'()*+,;=:@\\/?]|%[0-9A-Fa-f]{2})*)?(?:\\#(?:[A-Za-z0-9\\-._~!$&\'()*+,;=:@\\/?]|%[0-9A-Fa-f]{2})*)?$/.test(${'data'})`,
  email: expression`!/^[^@]+@[^@]+\\.[^@]+$/.test(${'data'})`,
  ipv4: expression`!/^(\\d?\\d?\\d){0,255}\\.(\\d?\\d?\\d){0,255}\\.(\\d?\\d?\\d){0,255}\\.(\\d?\\d?\\d){0,255}$/.test(${'data'}) || ${'data'}.split(".")[3] > 255`,
  ipv6: expression`!/^((?=.*::)(?!.*::.+::)(::)?([\\dA-F]{1,4}:(:|\\b)|){5}|([\\dA-F]{1,4}:){6})((([\\dA-F]{1,4}((?!\\3)::|:\\b|$))|(?!\\2\\3)){2}|(((2[0-4]|1\\d|[1-9])?\\d|25[0-5])\\.?\\b){4})$/.test(${'data'})`,
  regex: expression`/[^\\\\]\\\\[^.*+?^\${}()|[\\]\\\\bBcdDfnrsStvwWxu0-9]/i.test(${'data'})`,
  // TODO optimize uri-reference regex... too long
  'json-pointer': expression`!/^$|^\\/(?:~(?=[01])|[^~])*$/i.test(${'data'})`,
  'uri-reference': expression`!/^(?:[A-Za-z][A-Za-z0-9+\\-.]*:(?:\\/\\/(?:(?:[A-Za-z0-9\\-._~!$&\'()*+,;=:]|%[0-9A-Fa-f]{2})*@)?(?:\\[(?:(?:(?:(?:[0-9A-Fa-f]{1,4}:){6}|::(?:[0-9A-Fa-f]{1,4}:){5}|(?:[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,1}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){3}|(?:(?:[0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){2}|(?:(?:[0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}:|(?:(?:[0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})?::)(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))|(?:(?:[0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})?::)|[Vv][0-9A-Fa-f]+\\.[A-Za-z0-9\\-._~!$&\'()*+,;=:]+)\\]|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|(?:[A-Za-z0-9\\-._~!$&\'()*+,;=]|%[0-9A-Fa-f]{2})*)(?::[0-9]*)?(?:\\/(?:[A-Za-z0-9\\-._~!$&\'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*|\\/(?:(?:[A-Za-z0-9\\-._~!$&\'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:\\/(?:[A-Za-z0-9\\-._~!$&\'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)?|(?:[A-Za-z0-9\\-._~!$&\'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:\\/(?:[A-Za-z0-9\\-._~!$&\'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*|)(?:\\?(?:[A-Za-z0-9\\-._~!$&\'()*+,;=:@\\/?]|%[0-9A-Fa-f]{2})*)?(?:\\#(?:[A-Za-z0-9\\-._~!$&\'()*+,;=:@\\/?]|%[0-9A-Fa-f]{2})*)?|(?:\\/\\/(?:(?:[A-Za-z0-9\\-._~!$&\'()*+,;=:]|%[0-9A-Fa-f]{2})*@)?(?:\\[(?:(?:(?:(?:[0-9A-Fa-f]{1,4}:){6}|::(?:[0-9A-Fa-f]{1,4}:){5}|(?:[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,1}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){3}|(?:(?:[0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){2}|(?:(?:[0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}:|(?:(?:[0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})?::)(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))|(?:(?:[0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})?::)|[Vv][0-9A-Fa-f]+\\.[A-Za-z0-9\\-._~!$&\'()*+,;=:]+)\\]|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|(?:[A-Za-z0-9\\-._~!$&\'()*+,;=]|%[0-9A-Fa-f]{2})*)(?::[0-9]*)?(?:\\/(?:[A-Za-z0-9\\-._~!$&\'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*|\\/(?:(?:[A-Za-z0-9\\-._~!$&\'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:\\/(?:[A-Za-z0-9\\-._~!$&\'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)?|(?:[A-Za-z0-9\\-._~!$&\'()*+,;=@]|%[0-9A-Fa-f]{2})+(?:\\/(?:[A-Za-z0-9\\-._~!$&\'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*|)(?:\\?(?:[A-Za-z0-9\\-._~!$&\'()*+,;=:@\\/?]|%[0-9A-Fa-f]{2})*)?(?:\\#(?:[A-Za-z0-9\\-._~!$&\'()*+,;=:@\\/?]|%[0-9A-Fa-f]{2})*)?)$/i.test(${'data'})`,
  'uri-template': expression`!/^(?:(?:[^\\x00-\\x20"\'<>%\\\\^\`{|}]|%[0-9a-f]{2})|\\{[+#.\\/;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?:\\:[1-9][0-9]{0,3}|\\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?:\\:[1-9][0-9]{0,3}|\\*)?)*\\})*$/i.test(${'data'})`,
};