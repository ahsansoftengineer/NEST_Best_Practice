export default function CheckPublic(reflector, context) {
  const isPublic = reflector.getAllAndOverride('isPublic', [
    context.getHandler(),
    context.getClass(),
  ]);
  return isPublic
}